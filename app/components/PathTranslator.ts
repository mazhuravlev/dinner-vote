export class PathTranslator {
    public static templatePath(componentName: string): string {
        return `app/components/${componentName}/${componentName}.component.html`;
    }

    public static stylePath(componentName: string, style?: string) {
        return `app/components/${componentName}/${style ? style : componentName}.component.css`;
    }
}
