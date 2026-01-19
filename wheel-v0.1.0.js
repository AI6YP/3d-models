'use strict';

// Wheel replacement for Horizon EX-59 elliptical trainer

const { draw, makeCylinder, makeBaseBox, makeBox, makeSphere } = replicad;

const defaultParams = {
  H: 37,
  D: 73.5,
  axleD: 16.5,
  washerD: 32,
  washerH: 5
};

const main = (r, $) => {
  let shape

  shape = makeCylinder($.D / 2, $.H).chamfer(2) // main wheel

  shape = shape.cut(makeCylinder($.washerD / 2, $.washerH)) // washer cavity

  shape = shape.cut(makeCylinder($.axleD / 2, $.H)) // axle hole

  shape = shape.chamfer(1) // main wheel

  return [
    {name: 'wheel-v0.1.0', shape, color: '#555', opacity: 1}
  ];
};
