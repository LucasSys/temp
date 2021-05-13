import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class ProductModel extends Model {

    @attr() image;
    @attr() image_alt;
    @attr() name;
    @attr() value;
    @attr() description;
    @attr() reviews;

    get formated_value() {
        return this.value;
    }

}
