import sys, urllib.request, io
from PIL import Image
B='https://d8j0ntlcm91z4.cloudfront.net/user_38IyD1BMPMR4IW1TComGDayXWtW/hf_20261011_'
jobs=[('040905_d1ee3321-7d98-43af-a610-9d7a407827be','props/round-tree.png',0.75),
('040905_6287c34f-8662-4fa0-91bd-7ed1191b4098','props/tall-tree.png',0.75),
('040905_dc0feedc-ad6a-4b4c-ad2f-079b45818d19','props/blight-tree.png',0.75),
('040904_0f7c78db-cd6b-4b04-9958-7db1cfc2642e','props/mushrooms.png',1.0),
('040903_bf831d9e-5a1d-44b0-8bb2-35d49dd69572','props/blight-mushrooms.png',1.0),
('040903_bdd4ec9c-3876-4115-8f54-f9318610e0a7','props/ruin-pillar.png',0.667),
('040903_8b01bfa2-1cf7-4fa7-bb94-e3570540c234','props/amulith-gem.png',0.667),
('040903_eeee69fe-8e45-40b1-b504-0f291d515236','props/flower-bush.png',1.333),
('040903_8dba3dc1-2606-41c1-b54e-66fa20da1aec','ground/grass.png',None),
('040903_a3d8a4ea-f451-45e3-99e0-c444bf0abf28','ground/blight-soil.png',None),
('040904_946c0ac9-c57f-4fa5-bdb4-769486e0307c','ground/cliff.png',None),
('040904_f2d8ae83-443f-439b-b244-e00ef7569492','props/shrine-circle.png','sq')]
import os
for j,path,aspect in jobs:
  im=Image.open(io.BytesIO(urllib.request.urlopen(B+j+'.png').read()))
  out='public/art/'+path; os.makedirs(os.path.dirname(out),exist_ok=True)
  print(path, im.mode, im.size, end=' ')
  if aspect is None: im.convert('RGB').resize((512,512),Image.LANCZOS).save(out); print('tile'); continue
  im=im.convert('RGBA')
  bbox=im.getchannel('A').point(lambda a:255 if a>24 else 0).getbbox()
  if aspect=='sq': im=im.crop(bbox).resize((512,512),Image.LANCZOS); im.save(out); print('circle',bbox); continue
  im=im.crop(bbox); H=512; W=round(H*aspect)
  s=min(W/im.width,H/im.height); im=im.resize((max(1,round(im.width*s)),max(1,round(im.height*s))),Image.LANCZOS)
  c=Image.new('RGBA',(W,H),(0,0,0,0)); c.paste(im,((W-im.width)//2,H-im.height),im); c.save(out,optimize=True); print('fit',bbox,(W,H))
