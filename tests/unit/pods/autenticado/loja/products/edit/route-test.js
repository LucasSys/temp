import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | autenticado/loja/products/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:autenticado/loja/products/edit');
    assert.ok(route);
  });
});
