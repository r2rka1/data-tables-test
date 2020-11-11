<template>
  <div>
    <h1>ELEMENT-UI</h1>
    <a target="_blank" src="https://element.eleme.io/#/en-US/component/table#table">DOCS</a>
    <div style="width: 800px;">
      <el-table class="v-my-table" :data="dataSet" border stripe max-height="600"
                ref="multipleTable" @selection-change="handleSelectionChange">
        <el-table-column type="expand" fixed="left">
          <template slot-scope="props">
            <p>Category: {{ props.row.category }}</p>
            <p>Subcategory: {{ props.row.subcategory }}</p>
            <p>Supplier: {{ props.row.vendor }}</p>
            <p>Variance: {{ props.row.variance }}</p>
          </template>
        </el-table-column>
        <el-table-column
            type="selection"
            width="55" fixed="left">
        </el-table-column>
        <el-table-column class="my-column" v-for="(column, $index) in columns" :width="column.width" :fixed="column.fixed" :prop="column.dataIndex"
                         :label="column.title" :key="column.dataIndex + $index" sortable="custom" :min-width="column.minWidth">
        </el-table-column>
        <el-table-column
            label="Operations" width="200" fixed="right">
          <template slot-scope="scope">
            <el-button
                size="mini"
            >Edit</el-button>
            <el-button
                size="mini"
                type="danger"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <h1>pros</h1>
    <ul>
      <li>Expandable rows</li>
      <li>Easy CRUD actions (edit deletee add)</li>
      <li>Big component library asset</li>
      <li>Built-in sorting, pagination, sort (supports both FE and BE), jump to page</li>
      <li>Good approach to reach invite scrolling</li>
      <li>Advanced fixed columns and rows</li>
      <li>Support of Fixed Headers</li>
      <li>Support of slots and custom components in table cells</li>
      <li>Good support of column resizing</li>
      <li>Complete framework. Each component can be imported separately</li>
      <li>Ease of use</li>
      <li>Good documentations</li>
      <li>Built-in checkbox support</li>
      <li>Custom Colspan, RowSpan, Summary Rows and many other features (check docs)</li>
    </ul>
    <h1>cons</h1>
    <ul>
      <li>No cons...</li>
    </ul>
  </div>
</template>

<script>
import generateDataSet from "@/util/generateDataSet";

export default {
  name: "VueDataTables",
  data() {
    return {
      columns: [
        {
          title: 'Categories',
          dataIndex: 'category',
          fixed: true,
          width: 200,
          minWidth: 100
        },
        {
          title: 'Subcategories',
          dataIndex: 'subcategory',
          width: 150,
          minWidth: 100
        },
        {
          title: 'Suppliers',
          dataIndex: 'vendor',
          width: 150,
          minWidth: 100
        },
        {
          title: 'Spend',
          dataIndex: 'spend',
          width: 100,
          minWidth: 50
        },
        {
          title: 'Variance',
          dataIndex: 'variance',
          width: 150,
          minWidth: 50
        }
      ],
      multipleSelection: [],
      dataSet: [],
      defaultSort: {
        prop: 'categoriees',
        order: 'descending'
      }
    }
  },
  created() {
    this.dataSet = generateDataSet(25)
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style scoped>
.v-my-table {
  width: 100%;
}
</style>
