import * as React from 'react'

export namespace App {
    export interface Props {}
}

export class App extends React.Component<App.Props> {
    static defaultProps: Partial<App.Props> = {}

    constructor(props: App.Props, context?: any) {
        super(props, context)
    }

    render() {
        return <div>App</div>
    }
}
