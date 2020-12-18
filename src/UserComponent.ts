export interface IProps {
  name: string;
  date: string;
}

export default function UserComponent(root: HTMLElement, props: IProps): void {
  const element = document.createElement("div");
  element.innerHTML = `
    <div>Hi ${props.name} at ${props.date}</div>
  `;

  root.appendChild(element);
}
