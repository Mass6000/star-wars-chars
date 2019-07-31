import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCharacterGuard } from './can-activate-character.guard';

describe('CanActivateCharacterGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateCharacterGuard]
    });
  });

  it('should ...', inject([CanActivateCharacterGuard], (guard: CanActivateCharacterGuard) => {
    expect(guard).toBeTruthy();
  }));
});
