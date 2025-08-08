declare module '*.json' {
  const value: import('./index').AppData;
  export default value;
}
