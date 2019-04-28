# NGX FABRIC

This Angular library is a perfect wrapper for <a href="http://fabricjs.com/">Fabric Js</a> and it exposed some helper methods for developers.

## Installation

```
npm install ngx-fabric
```

## Usage

app.module.ts
```
import { NgxFabricModule } from 'ngx-fabric';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFabricModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## API References

**Services**

* Canvas
* Image
* IText
* Color

**Interfaces**

* CanvasInterface
* ImageInterface
* ITextInterface
* ColorInterface

## License

This project is licensed under the terms of the MIT license.

## Further help

If you have ideas for more that should be on this page, <a href="https://github.com/ansafans/ng-fabricjs/issues">let me know</a>
