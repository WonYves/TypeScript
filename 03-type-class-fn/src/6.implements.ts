interface Onesing{
  sing():void
}

class TwoPerson implements Onesing{
  sing(){
    console.log('实现接口');
  }
}