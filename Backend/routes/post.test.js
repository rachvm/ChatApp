import supertest from 'supertest';
import app from '../app.js';
import  {expect, test} from '@jest/globals'
import { MongoClient } from 'mongodb';

const uri = process.env.ATLAS;

describe('product', () => {
  let connection;
  let db;

beforeAll(async () => {
  connection = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = connection.db('gettogether').collection('chat');
});

afterAll(async () => {
  await connection.close()
});

  test('status 200 when sending a get request', async ()=>{
  const response = await supertest(app).get('/api/chat')
  expect(response.status).toBe(200);
  });

  test('insert into the collection', async () => {
    const post = {
      name: "JoeTest",
      post: "Lorem ipsum",
    }
    const response = await supertest(app)
    .post(`/api/chat/`)
    .send(post)
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({
      success: true,
      payload: {
        "_id": expect.any(String),
        "name": "JoeTest",
        "post": "Lorem ipsum", }
    })
    })

    test('remove created post from collection', async () => {
      const response = await new MongoClient(uri).db('gettogether').collection('chat').deleteOne({name: "JoeTest"});
      console.log(response);
      expect(response).toStrictEqual({ acknowledged: true, deletedCount: 1 })
      })
  })
