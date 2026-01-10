import antfu from '@antfu/eslint-config'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default antfu({
  react: true,
  ignores: ['dist', 'pnpm-workspace.yaml'],
}, jsxA11y.flatConfigs.recommended)
