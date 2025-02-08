export class HelloController {
  public hello = (req: any, res: any) => {
    return res.send("Hello World!");
  };
}
