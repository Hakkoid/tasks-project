declare module '*.css?module' {
  const classNames: IClassNames
  
  interface IClassNames {
    [className: string]: string;
  }

	export = classNames;
}

declare module '*.scss?module' {
  const classNames: IClassNames
  
  interface IClassNames {
    [className: string]: string;
  }

	export = classNames;
}

