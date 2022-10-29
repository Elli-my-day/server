import { Container, Service } from "typedi";

@Service()
class ExampleInjectedService {
  printMessage() {
    console.log("i'm alive");
  }
}

@Service()
class ExampleService {
  public injectedService: ExampleInjectedService;

  constructor(injectedService: ExampleInjectedService) {
    this.injectedService = injectedService;
  }
}

const serviceInstance = Container.get(ExampleService);

serviceInstance.injectedService.printMessage();

// 인스턴스로 만들 class에는 @Service 데코레이터를 붙이고, 해당 클래스를 불러 올 때는 Container에서 가져오는 방식
