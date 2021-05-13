import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TopMenuComponent extends Component {

    @service() router;

    get activeMenu(){

        return [
            { 
                title: "Home",
                route: "inicio",
                active: this.router.isActive("inicio")
            },
            { 
                title: "Entrar",
                route: "desautenticado.login",
                active: this.router.isActive("desautenticado.login")
            },
            { 
                title: "Perfil",
                route: "autenticado.perfil",
                active: this.router.isActive("autenticado.perfil")
            },
            { 
                title: "Logista",
                route: "autenticado.loja",
                active: this.router.isActive("autenticado.loja")
            },
            { 
                title: "Carrinho",
                route: "cart",
                active: this.router.isActive("cart")
            },
        ];
        
    } 
    
    
}
