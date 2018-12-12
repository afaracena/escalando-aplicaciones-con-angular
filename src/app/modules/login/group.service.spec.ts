import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GroupService } from './group.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

class HttpClienMock {
  get = jasmine.createSpy();

}


fdescribe('GroupService', () => {

let service: GroupService;
let httpClienMock: HttpClienMock;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          providers: HttpClient,
          useClass: HttpClienMock
        },
        GroupService
      ]
    });
    service = TestBed.get(GroupService);
    httpClienMock = TestBed.get(HttpClienMock);
  });

  it('test1', () => {
    expect(true).toBe(true);
  });

  it('test2', () => {
    service.getGroups();
  });


  it('test3', () => {
    httpClienMock.get.and.returnValue({
      toPrmise: () => null
    });
    const result = service.getGroups();

    expect(httpClienMock.get).toHaveBeenCalledWith(environment.endpoint.groups)
    expect(result).toBe(null);
  });

});
