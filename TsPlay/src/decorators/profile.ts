function Component(value: number) {
  return (consturctor: Function) => {
    console.log('Component decorator called');
    consturctor.prototype.options = value;
    consturctor.prototype.uniquid = new Date();
    consturctor.prototype.insertInDOM = () => {
      console.log('Insert the component int the DOM');
    };
  };
}

@Component(1)
export class ProfileComponent {}
