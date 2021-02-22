import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | desautenticado/recuperar-conta', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:desautenticado/recuperar-conta');
    assert.ok(route);
  });
});
