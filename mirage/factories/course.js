import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Test #${i +1}`; },
  description: faker.lorem.paragraph(),
  duration: faker.random.number(),
  imgUrl: faker.list.cycle(
    "/pix-live/images/test1.png",
    "/pix-live/images/test2.png",
    "/pix-live/images/test3.png",
    "/pix-live/images/test4.png"
  )
});
