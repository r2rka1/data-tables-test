<template>
  <div class="table-view">
    <div class="table-view">
      <h1>VUETIFY</h1>
      <a target="_blank" href="https://vuetifyjs.com/en/components/data-tables/#external-pagination">DOCS</a>
      <div></div>
      <v-data-table
          show-select
          :single-select="singleSelect"
          v-model="selected"
          item-key="category"
          class="elevation-1 my-table"
          :item-class= "row_classes"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          show-expand
          fixed-header
          height="300px"
          v-columns-resizable
          :items="dataSet" :headers="headers">
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            More info about {{ item.category }}
          </td>
        </template>
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.category"
                            label="Category"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.subcategory"
                            label="Subcategory"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.vendor"
                            label="Supplier"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.spend"
                            label="Spend"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.variance"
                            label="Variance"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
      <v-snackbar
          v-model="snack"
          :timeout="3000"
          :color="snackColor"
      >
        {{ snackText }}

        <template v-slot:action="{ attrs }">
          <v-btn
              v-bind="attrs"
              text
              @click="snack = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <h1>pros</h1>
      <ul>
        <li>Expandable rows</li>
        <li>Easy CRUD actions (edit deletee add)</li>
        <li>Big component library asset</li>
        <li>Built-in sorting, pagination, sort (supports both FE and BE), jump to page</li>
        <li>Ease of use</li>
        <li>Multisort (see docs)</li>
        <li>Grouping (see docs)</li>
        <li>Built-in loading state (see docs)</li>
        <li>Support for row selection (checkboxes)</li>
        <li>Support resizable columns using extra plugin (https://www.npmjs.com/package/vue-columns-resizable-vuetify)</li>
        <li>Support of Fixed Headers</li>
        <li>Support of slots and custom components in table cells</li>
      </ul>
      <h1>cons</h1>
      <ul>
        <li>Complete framework (will require integration)</li>
        <li>Resizable columns is an external package. Implementation is at avarage level (resize drops on any action, some bugs on first rresize actions)</li>
      </ul>
    </div>
  </div>
</template>

<script>
import generateDataSet from "@/util/generateDataSet";
export default {
name: "VuetifyTable",
  data() {
    return {
      snack: false,
      singleExpand: false,
      snackColor: '',
      snackText: '',
      expanded: [],
      dialog: false,
      dialogDelete: false,
      pagination: {},
      dataSet: [],
      selected: [],
      singleSelect: false,
      headers: [
        {
          text: 'Categories',
          align: 'start',
          sortable: true,
          value: 'category'
        },
        {
          text: 'Subcategories',
          align: 'start',
          sortable: true,
          value: 'subcategory'
        },
        {
          text: 'Suppliers',
          align: 'start',
          sortable: true,
          value: 'vendor'
        },
        {
          text: 'Spend',
          align: 'end',
          sortable: true,
          value: 'spend'
        },
        {
          text: 'Variance',
          align: 'end',
          sortable: true,
          value: 'variance'
        },
        { text: 'Actions', value: 'actions', sortable: false },
        { text: '', value: 'data-table-expand' },
      ],
      editedItem: {
        category: '',
        subcategory: 0,
        vandor: 0,
        spend: 0,
        supplier: 0,
      },
      defaultItem: {
        category: '',
        subcategory: 0,
        vandor: 0,
        spend: 0,
        supplier: 0,
      },
    }
  },
  created() {
    this.dataSet = generateDataSet()
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.dataSet.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.dataSet.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.dataSet.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    row_classes() {
        return "my-row";
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.dataSet[this.editedIndex], this.editedItem)
      } else {
        this.dataSet.unshift(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style lang="scss">
.my-table {
  width: 100%;
}
.my-row {
  td {
    border: 1px solid lightgray;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.table-view {
  width: 100%;
}
</style>
