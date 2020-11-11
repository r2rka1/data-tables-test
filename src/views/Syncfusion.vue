<template>
  <div>
    <h1>SYNCFUSION</h1>
    <a target="_blank" href="https://ej2.syncfusion.com/vue/demos/#/material/grid/grid-overview.html">DOCS</a>
    <div style="width: 800px">
      <div style="width: 800px">
        <ejs-grid :pageSettings="pageSettings" :selectionSettings="selectOptions"  :dataSource="data" height='400' :frozenRows='rows' :frozenColumns='columns' :allowSelection='false' :enableHover='false' :allowResizing='true' :allowSorting='true' :allowMultiSorting='false' :allowPaging='true'>
          <e-columns>
            <e-column type='checkbox' width='50'></e-column>
            <e-column field='category' headerText='Category' width='200' textAlign='Left'></e-column>
            <e-column field='subcategory' headerText='Subcategory' width='250' textAlign='Left'></e-column>
            <e-column field='vendor' headerText='Supplier' width='120' textAlign='Left'></e-column>
            <e-column field='spend' headerText='Spend' width='125' textAlign='Right'></e-column>
            <e-column field='variance' headerText='Variance' width='125' textAlign='Right'></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
    <h1>pros</h1>
    <ul>
      <li>Huge amount of functionality including all app needs</li>
      <li>Easy CRUD actions (edit deletee add)</li>
      <li>Big component library asset</li>
      <li>Built-in sorting, pagination, sort (supports both FE and BE), jump to page</li>
      <li>Infinite scrolling support out of the box</li>
      <li>Inline Editing</li>
      <li>Print/Export</li>
      <li>Advanced fixed columns and rows</li>
      <li>Support of Fixed Headers</li>
      <li>Support of slots and custom components in table cells</li>
      <li>Good support of column resizing</li>
      <li>Complete framework. Each component can be imported separately</li>
      <li>Ease of use</li>
      <li>Good documentation</li>
      <li>Built-in checkbox support</li>
      <li>Custom Colspan, RowSpan, Summary Rows and many other features (check docs)</li>
    </ul>
    <h1>cons</h1>
    <ul>
      <li>$ 4,995 /1st year $1995/2nd year for 5 developers</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GridPlugin, Freeze, Resize, Sort, Page, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import { Browser } from '@syncfusion/ej2-base';
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { NumericTextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import generateDataSet from "../util/generateDataSet";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(NumericTextBoxPlugin);

export default Vue.extend({
  data: () => {
    return {
      data: generateDataSet(50),
      rows: 2,
      columns: 2,
      columnValue: Browser.isDevice ? 1 : 2,
      pageSettings: { pageSizes: [12,25,50], pageSize: 12 },
      editSettings: { allowDeleting: true },
      toolbar: ['Delete'],
      selectOptions: { persistSelection: true }
    };
  },
  methods: {
    btnClick(){
      this.rows = parseInt((this.$refs.row).getText(), 10);
      this.columns = parseInt((this.$refs.col).getText(), 10);
    }
  },
  provide: {
    grid: [Freeze, Resize, Sort, Page, Edit, Toolbar]
  }
});
</script>
