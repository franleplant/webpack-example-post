export interface IProps {
  name: string;
}

export default function UserComponent(root: HTMLElement, props: IProps): void {
  const element = document.createElement('div')
  element.innerHTML = `
    <div>Hi ${props.name}</div>
  `

  root.appendChild(element)
}
