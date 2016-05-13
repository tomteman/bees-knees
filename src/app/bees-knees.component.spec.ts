import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BeesKneesAppComponent } from '../app/bees-knees.component';

beforeEachProviders(() => [BeesKneesAppComponent]);

describe('App: BeesKnees', () => {
  it('should create the app',
      inject([BeesKneesAppComponent], (app: BeesKneesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'bees-knees works!\'',
      inject([BeesKneesAppComponent], (app: BeesKneesAppComponent) => {
    expect(app.title).toEqual('bees-knees works!');
  }));
});
