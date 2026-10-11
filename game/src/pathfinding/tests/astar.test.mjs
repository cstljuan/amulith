import test from 'node:test';
import assert from 'node:assert/strict';
import {astar,octile} from '../astar.ts';

test('A* uses optimal diagonals on an open grid without mutating it',()=>{
 const grid=Array.from({length:5},()=>Array(5).fill(true));const before=JSON.stringify(grid);
 const path=astar(grid,{x:0,y:0},{x:4,y:4});assert.equal(path.length,5);assert.equal(octile(path[0],path.at(-1)),4*Math.SQRT2);assert.equal(JSON.stringify(grid),before);
});
test('A* routes around walls and rejects diagonal corner cutting',()=>{
 const grid=[[true,false,true],[true,false,true],[true,true,true]];
 assert.deepEqual(astar(grid,{x:0,y:0},{x:2,y:0}),[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2},{x:2,y:1},{x:2,y:0}]);
 assert.deepEqual(astar([[true,false],[false,true]],{x:0,y:0},{x:1,y:1}),[]);
});
test('A* handles same cell, blocked/unreachable goals, ragged and out-of-bounds input',()=>{
 assert.deepEqual(astar([[true]],{x:0,y:0},{x:0,y:0}),[{x:0,y:0}]);assert.deepEqual(astar([[true,false,true]],{x:0,y:0},{x:2,y:0}),[]);
 assert.deepEqual(astar([[true,false]],{x:0,y:0},{x:1,y:0}),[]);assert.deepEqual(astar([[true]],{x:-1,y:0},{x:0,y:0}),[]);
 assert.deepEqual(astar([[true],[true,true]],{x:0,y:0},{x:0,y:1}),[]);
});
