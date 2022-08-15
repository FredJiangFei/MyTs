type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (consturctor: Function) => {
    console.log('Component decorator called');
    consturctor.prototype.options = options;
    consturctor.prototype.uniquid = new Date();
    consturctor.prototype.insertInDOM = () => {
      console.log('Insert the component int the DOM');
    };
  };
}

@Component({ selector: '#my-ele' })
export class ProfileComponent {}
