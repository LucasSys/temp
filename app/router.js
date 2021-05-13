import EmberRouter from '@ember/routing/router';
import config from 'aplicativo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('aplication');
  this.route('inicio', {path: "/" });

  this.route('desautenticado', function() {
    this.route('login');
    this.route('cadastrar');
    this.route('recuperar-conta');
  });
  this.route('autenticado', function() {
    this.route('perfil', function() {
      this.route('products', function() {
        this.route('delivers', function() {
          this.route('view');
        });
      });
    });
    this.route('compras');
    this.route('entregas');
    this.route('loja', function() {
      this.route('products', function() {
        this.route('add');
        this.route('edit');
        this.route('delivers', function() {
          this.route('view');
        });
      });
    });
  });
  this.route('cart');
});
