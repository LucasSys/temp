import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | desautenticado/cadastrar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:desautenticado/cadastrar');
    assert.ok(route);
  });
});
