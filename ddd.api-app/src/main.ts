/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { IMultiply, ICalculator, ISum, TYPES } from 'ddd.core';
import { Calculator, Sum, Multiply } from 'ddd.services';
import { Container } from 'inversify';
import 'reflect-metadata';

const container = new Container();

container.bind<ICalculator>(TYPES.ICalculator).to(Calculator);
container.bind<ISum>(TYPES.ISum).to(Sum);
container.bind<IMultiply>(TYPES.IMultiply).to(Multiply);


export const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to ddd.api-app!' });
});

app.get('/api/sum', async (req, res) => {
  const calculator = container.get<ICalculator>(TYPES.ICalculator);
  res.send({ res: await calculator.sum(1, 2) });
});

app.get('/api/multiply', async (req, res) => {
  const calculator = container.get<ICalculator>(TYPES.ICalculator);
  res.send({ res: await calculator.multiply(1, 2) });
});


const port = process.env.PORT || 3333;
export const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
