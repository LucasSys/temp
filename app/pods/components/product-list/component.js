import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ProductListComponent extends Component {

    @service() store;
    
    get list() {
        return this.store.findAll("product");
    }

}
