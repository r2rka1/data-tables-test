<template>
  <div class="table-view" style="width: 800px">
    <h1>ANT-D</h1>
    <a target="_blank" src="https://antdv.com/components/table/">DOCS</a>
    <h1>pros</h1>
    <ul>
      <li>Expandable rows advanced (trees)</li>
      <li>Easy CRUD actions (edit deletee add)</li>
      <li>Big component library asset</li>
      <li>Built-in sorting, pagination, sort (supports both FE and BE), jump to page</li>
      <li>Advanced fixed columns and rows</li>
      <li>Built-in loading state (see docs)</li>
      <li>Support for row selection (checkboxes)</li>
      <li>Support resizable columns using extra plugin (vue-draggable-resizable)</li>
      <li>Support of Fixed Headers</li>
      <li>Support of slots and custom components in table cells</li>
    </ul>
    <h1>cons</h1>
    <ul>
      <li>Complete framework (will require integration)</li>
      <li>Resizable columns is an external package and kind not so easy to implement. But it works much better in docs</li>
      <li>No built-in checkbox support</li>
    </ul>
    <a-button class="editable-add-btn" @click="handleAdd">
      Add
    </a-button>
    <a-table :components="components" bordered :scroll="{ x: 1100, y: 300 }" :columns="columns" :data-source="dataSet">
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'category', $event)" />
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
            v-if="dataSet.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.category)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script lang="js">
import generateDataSet from "@/util/generateDataSet";
const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};
export default {
  name: "Antd",
  components: {
    EditableCell,
  },
  data() {
    return {
      dataSet: [],
      columns
    }
  },
  computed: {
    count() {
      return this.dataSet.length
    }
  },
  created() {
    this.dataSet = generateDataSet()
    this.dataSet.forEach((item, index) => item.children = [{
      key: this.count + 1 + index + item.key,
      category: 'Child Cat' + this.count,
      subcategory: 'child subcat',
      vendor: 'child vendor',
      children: [
        {
          key: this.count + 1 + index + 100,
          category: 'Child Child Cat' + this.count,
          subcategory: 'child Child subcat',
          vendor: 'child Child vendor',
        }
      ]
    },])
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSet = [...this.dataSet];
      const target = dataSet.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSet = dataSet;
      }
    },
    onDelete(category) {
      const dataSet = [...this.dataSet];
      this.dataSet = dataSet.filter(item => item.category !== category);
    },
    handleAdd() {
      const { count, dataSet } = this;
      const newData = {
        category: 'Category Name ' + count,
        subcategory: 'Subcategory ' + count,
        vendor: `Vendor ${count}`,
        spend: '$21312',
        variance: '15%',
      };
      this.dataSet = [newData, ...dataSet];
    },
  }
}
</script>

<style scoped>

</style>
