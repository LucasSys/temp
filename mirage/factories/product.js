import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    
    image: () => faker.image.fashion(),
    image_alt: () => faker.commerce.productName(),
    name: () => faker.commerce.productName(),
    value: () => (Math.random() * (300 - 1) + 1).toFixed(2),
    description: () => faker.commerce.productDescription(),
    reviews: () => Math.round(Math.random() * (300 - 1) + 1),

});
