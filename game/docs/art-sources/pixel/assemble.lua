-- Build a tagged .aseprite sprite from native frames, then export a 2x sheet.
-- Args (via --script-param): dir=<frames dir> out=<.aseprite path> cell=<cell px> tags=name:count,name:count
local p = app.params
local cell = tonumber(p.cell)
local spr = Sprite(cell, cell, ColorMode.RGB)
spr.filename = p.out
local first = true
local tags = {}
local idx = 1
for spec in string.gmatch(p.tags, "[^,]+") do
  local name, count = spec:match("([^:]+):(%d+)")
  count = tonumber(count)
  local from = idx
  for i = 0, count - 1 do
    local path = string.format("%s/%s_%02d.png", p.dir, name, i)
    local img = Image{ fromFile = path }
    if not first then spr:newEmptyFrame(idx) end
    first = false
    -- feet on the bottom edge, centered
    local x = math.floor((cell - img.width) / 2)
    local y = cell - img.height
    spr:newCel(spr.layers[1], idx, img, Point(x, y))
    idx = idx + 1
  end
  tags[#tags + 1] = { name = name, from = from, to = idx - 1 }
end
for _, t in ipairs(tags) do
  local tag = spr:newTag(t.from, t.to)
  tag.name = t.name
end
spr.layers[1].name = "art"
spr:saveAs(p.out)
