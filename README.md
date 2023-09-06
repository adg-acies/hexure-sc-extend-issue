Currently, there is an issue with `@hexure/ui` that if you render a styled component before
any extended hexure component, the styles will not be applied to the extended component.

To see the issue, run `npm run build` and then serve `build` folder.

Surprisingly the issue doesn't come if styled component is used after extended hexure component.
To see this, change the branch to `without-issue` and run `npm run build` and then serve `build` folder.
