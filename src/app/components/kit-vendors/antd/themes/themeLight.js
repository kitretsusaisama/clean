// antd theme variables for light theme
// ref: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less

module.exports = {
  '@kit-white': '#ffffff',
  '@kit-black': '#141322',
  '@kit-gray-1': '#f0f2f4',
  '@kit-gray-2': '#e4e9f0',
  '@kit-gray-3': '#d9dee9',
  '@kit-gray-4': '#c8c4db',
  '@kit-gray-6': '#595c97',
  '@kit-blue': 'var(--kit-color-primary)', // see kit-core/mixins.scss
  '@kit-blue-light': '#42baf9',
  '@kit-red': '#f5222e',
  '@kit-green': '#41b883',
  '@kit-orange': '#faad15',

  // '@font-family': 'var(--kit-font-family)',

  '@text-color': '@kit-gray-6',
  '@primary-color': '@kit-blue',
  '@info-color': '@kit-blue',
  '@success-color': '@kit-green',
  '@processing-color': '@kit-blue',
  '@error-color': '@kit-red',
  '@highlight-color': '@kit-red',
  '@warning-color': '@kit-orange',
  '@normal-color': '@kit-gray-3',

  '@body-background': '@kit-white',
  '@component-background': '@kit-white',
  '@heading-color': '@kit-gray-6',

  '@layout-body-background': 'transparent',
  '@layout-header-background': 'transparent',
  '@layout-footer-background': 'transparent',

  '@border-color-base': '@kit-gray-2',
  '@border-color-split': '@kit-gray-2',
  '@border-color-inverse': '@kit-white',
  // '@border-radius-base': '2px',
  '@disabled-color': '@kit-gray-4',
  '@disabled-bg': '@kit-gray-2',

  '@btn-primary-color': '@kit-white',
  '@btn-primary-bg': '@kit-blue',
  '@btn-default-color': '@kit-gray-6',
  '@btn-default-bg': '@kit-white',
  '@btn-danger-color': '@kit-white',
  '@btn-danger-bg': '@kit-red',
  '@btn-danger-border': '@kit-red',

  '@link-color': '@kit-blue',
  '@link-hover-color': '@kit-blue-light',
  '@link-active-color': '@kit-blue-light',

  '@item-active-bg': '@kit-gray-2',
  '@item-hover-bg': '@kit-gray-2',

  '@input-placeholder-color': 'lighten(@kit-gray-6, 10%)',
  '@input-color': '@kit-gray-6',
  '@input-addon-bg': '@kit-gray-1',
  '@input-bg': '@kit-white',
  '@input-border-color': '@kit-gray-2',

  '@alert-success-border-color': '#b7eb8f',
  '@alert-success-bg-color': '#f6ffed',
  '@alert-success-icon-color': '@kit-green',
  '@alert-info-border-color': '#91d5ff',
  '@alert-info-bg-color': '#e6f7ff',
  '@alert-info-icon-color': '@kit-blue',
  '@alert-warning-border-color': '#ffe58f',
  '@alert-warning-bg-color': '#fffbe6',
  '@alert-warning-icon-color': '@kit-orange',
  '@alert-error-border-color': '#ffa39e',
  '@alert-error-bg-color': '#fff1f0',
  '@alert-error-icon-color': '@kit-red',

  '@tabs-hover-color': '@kit-blue-light',
  '@tabs-active-color': '@kit-blue',
  '@tabs-card-active-color': '@kit-blue',
  '@tabs-ink-bar-color': '@kit-blue',
  '@tabs-highlight-color': '@kit-blue',

  '@table-header-bg': '@kit-gray-1',
  '@table-header-color': '@kit-gray-6',
  '@table-footer-bg': '@kit-gray-1',
  '@table-footer-color': '@kit-gray-6',
  '@table-row-hover-bg': '@kit-gray-2',
  '@table-selected-row-bg': '@kit-gray-1',
  '@table-expanded-row-bg': '@kit-gray-1',

  '@label-required-color': '@kit-red',
  '@label-color': '@kit-gray-6',
}
