import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ProductListComponent extends Component {

    @service() store;

    activeFilter = "all";

    filters = [
      {
        title: "Todos",
        alias: "all"
      },
      {
        title: "Recentes",
        alias: "recent"
      },
      {
        title: "Brechó",
        alias: "thrift-store"
      },
      {
        title: "Novo",
        alias: "no-thrift-store"
      },
    ];

    get list() {
        return this.store.findAll("product");
    }

}
