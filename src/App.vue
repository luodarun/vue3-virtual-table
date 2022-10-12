
<template>
  <div class="vr-table">
    <div class="hidden-columns" ref="hiddenColumns">
      <slot></slot>
    </div>
    <div class="vr-table__header-wrapper"
         ref="headerWrapper">
      <table-header ref="tableHeader"
                    :store="store">
      </table-header>
    </div>
    <div class="vr-table__body-wrapper"
         ref="bodyWrapper">
      <table-body :context="context"
                  :store="store">
      </table-body>
    </div>
  </div>
</template>
