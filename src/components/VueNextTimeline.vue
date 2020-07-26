<template>
  <div
    class="vue-next-timeline"
    :style="{
      'min-width': minWidth,
      'max-width': maxWidth
    }">
    <table>
      <tbody>
        <template v-for="(item, ix) in items">
          <!-- Item impar -->
          <td v-if="ix % 2 === 0" :key="item[itemUniqueKey] || ix" class="vue-next-timeline__item even">
            <!-- Title item -->
            <tr
              :class="{'li-last': ix === items.length - 1}"
              :style="{'--color': colorItem(item)}">
              <div class="vue-next-timeline__item--line" :style="{'--color': colorItem(item)}">
                <span class="budget" />
              </div>
              <div class="vue-next-timeline__item--title">
                <slot name="title">
                  <span
                    :title="itemTitle(item)"
                    @click="titleClicked(item)"
                    class="vue-next-timeline__item--title"
                    v-if="itemTitle(item)"
                    :style="{'--color': colorItem(item)}">
                      {{ itemTitle(item) }}
                  </span>
                </slot>
              </div>
            </tr>
            <!-- Content item -->
            <tr class="vue-next-timeline__item__wrapper-content" :style="{'min-width': minWidthItem, 'max-width': maxWidthItem}">
              <div class="vue-next-timeline__item--content">
                <slot name="content">
                  <span
                    :title="itemContent(item)"
                    @click="titleClicked(item)"
                    :style="{'--color': colorItem(item)}"
                    class="vue-next-timeline__item--content"
                    v-if="itemContent(item)">
                      {{ itemContent(item) }}
                  </span>
                </slot>
              </div>
            </tr>
          </td>
          <!-- Item par -->
          <td v-else :key="item[itemUniqueKey] || ix" class="vue-next-timeline__item odd">
            <!-- Content item -->
            <tr class="vue-next-timeline__item__wrapper-content" :style="{'min-width': minWidthItem, 'max-width': maxWidthItem}">
                <div class="vue-next-timeline__item--content">
                  <slot name="content">
                    <span
                      :title="itemContent(item)"
                      @click="titleClicked(item)" :style="{'--color': colorItem(item)}"
                      class="vue-next-timeline__item--content"
                      v-if="itemContent(item)">
                        {{ itemContent(item) }}
                    </span>
                  </slot>
                </div>
            </tr>
            <!-- Title item -->
            <tr
              :key="item[itemUniqueKey] || ix"
              :class="{'li-last': ix === items.length - 1}"
              :style="{'--color': colorItem(item)}">
                <div class="vue-next-timeline__item--line" :style="{'--color': colorItem(item)}">
                  <span class="budget" />
                </div>
                <div class="vue-next-timeline__item--title">
                  <slot name="title">
                    <span
                      :title="itemTitle(item)"
                      @click="titleClicked(item)"
                      class="vue-next-timeline__item--title"
                      v-if="itemTitle(item)"
                      :style="{'--color': colorItem(item)}">
                        {{ itemTitle(item) }}
                    </span>
                  </slot>
                </div>
            </tr>
          </td>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VueNextTimeline',
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    itemUniqueKey: {
      type: String,
      default: ''
    },
    itemTitleKey: {
      type: String,
      default: 'title'
    },
    itemContentKey: {
      type: String,
      default: 'content'
    },
    itemClickable: {
      type: [String, Boolean],
      default: true
    },
    minWidth: {
      type: String,
      default: '700px'
    },
    maxWidth: {
      type: String,
      default: '1220px'
    },
    minWidthItem: {
      type: String,
      default: '200px'
    },
    maxWidthItem: {
      type: String,
      default: '400px'
    },
    textAlign: {
      type: String,
      default: 'center',
      validator: (value) => {
        return ['left', 'center', 'right'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    contentSubstr: {
      type: Number,
      default: 250
    }
  },
  data () {
    return {
      itemSelected: {}
    }
  },
  methods: {

    itemTitle (item) {
      return item[this.itemTitleKey]
    },

    itemContent (item) {
      return item[this.itemContentKey]
    },

    colorItem (item) {
      return item.color || '#1e2124'
    },

    titleClicked (item) {
      if (this.itemClickable) {
        this.$emit('click', item)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .vue-next-timeline {

    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    > table {
      list-style: none;
      display: flex;
      padding: 0;
      border-collapse: collapse;

      tr {
        min-height: 80px;
        max-width: 200px;
        display: block;
        position: relative;
      }

      .vue-next-timeline__item {
        position: relative;
        border: 0;
        padding: 0;

        &--line {
          background-color: var(--color);
          width: 1px;
          height: 70px;
          display: block;
          position: absolute;
          left: 50%;

          .budget {
            position: absolute;
            bottom: 0;
            background-color: var(--color);
            width: 10px;
            height: 10px;
            border-radius: 100%;

            &:before {
              content: '';
              width: 10px;
              height: 10px;
              border: 1px solid var(--color);
              display: block;
              padding: 6px;
              position: absolute;
              top: -7px;
              left: -7px;
              border-radius: 100%;
            }
            &:after {
              content: '';
              width: 24px;
              height: 24px;
              border: 1px solid #848484;
              display: block;
              padding: 6px;
              position: absolute;
              top: -14px;
              left: -14px;
              border-radius: 100%;
            }
          }
        }

        &--title {
          font-weight: 300;
          color: var(--color);
          display: block;
          font-size: 28px;
          line-height: 22px;
          text-align: left;
          text-transform: uppercase;
          line-height: 2rem;
          position: absolute;
          text-align: center;
          width: 100%;
        }

        &__wrapper-content {
          min-height: 80px;
          position: relative;
          display: block;
        }
        &--content {
          font-size: 14px;
          line-height: 20px;
          color: #848484;
          width: 100%;
          position: absolute;
          left: 0;
          text-align: left;
          text-transform: uppercase;
          padding: 8px 0;
          width: 100%;
        }

        // Impar
        &.even {

          tr:first-child {
            border-bottom: 1px solid #b2b3b6;
          }

          .vue-next-timeline__item--title {
            bottom: 100%;
          }
          .vue-next-timeline__item--content {
            top: 1rem;
            border-bottom: 2px solid var(--color);
          }
          .vue-next-timeline__item--line {
            bottom: 0;
            &:before {
              position: absolute;
              background-color: var(--color);
              content: '';
              width: 20px;
              height: 20px;
              top: -4px;
              left: -9px;
              display: block;
              border-radius: 100%;
            }

            .budget {
              bottom: -6px;
              left: -4px;
            }
          }
        }
        // Par
        &.odd {
          tr:first-child {
            border-bottom: 1px solid #b2b3b6;
          }

          .vue-next-timeline__item--title {
            top: 100%;
            margin-top: 6px;
          }
          .vue-next-timeline__item--content {
            bottom: 1rem;
            border-top: 2px solid var(--color);
          }
          .vue-next-timeline__item--line {
            top: 0;
            .budget {
              top: -6px;
              left: -4px;
            }

            &:after {
              position: absolute;
              background-color: var(--color);
              content: '';
              width: 20px;
              height: 20px;
              bottom: -12px;
              left: -10px;
              border-radius: 100%;
            }
          }
        }
      }
    }
  }
</style>
