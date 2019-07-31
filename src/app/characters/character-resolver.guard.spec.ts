import { TestBed, async, inject } from '@angular/core/testing';

import { CharacterResolverGuard } from './character-resolver.guard';

describe('CharacterResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterResolverGuard]
    });
  });

  it('should ...', inject([CharacterResolverGuard], (guard: CharacterResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
