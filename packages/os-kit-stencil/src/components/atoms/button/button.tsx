import { Component, } from '@stencil/core';

@Component({
  tag: 'os-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class OsButton {
  render() {
    return <div>Hello, World! I'm a Pickle Rick!</div>;
  }
}
