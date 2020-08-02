<template>
  <div
    class="vue-next-timeline"
    :style="{
      'min-width': minWidth,
      'max-width': maxWidth
    }"
    :class="className">
    <table>
      <tbody>
        <template v-for="(item, ix) in items">
          <!-- Item impar -->
          <td
            v-if="ix % 2 === 0"
            :key="item[itemUniqueKey] || ix"
            class="vue-next-timeline__item even">
            <!-- Title item -->
            <tr :style="returnCustomElementColor(item)">
              <div
                class="vue-next-timeline__item--line"
                :style="returnCustomElementColor(item)">
                <span class="budget" />
              </div>
              <div class="vue-next-timeline__item--title">
                <span
                  :title="itemTitle(item)"
                  @click="titleClicked(item)"
                  v-if="itemTitle(item)"
                  :style="[returnCustomElementColor(item), cursorPointer]">
                  <slot name="title">
                    {{ itemTitle(item) }}
                  </slot>
                </span>
              </div>
            </tr>
            <!-- Content item -->
            <tr
              class="vue-next-timeline__item__wrapper-content"
              :style="minMaxWidthTr">
              <div class="vue-next-timeline__item--content">
                <span
                  :title="itemContent(item)"
                  @click="titleClicked(item)"
                  :style="[returnCustomElementColor(item), cursorPointer]"
                  v-if="itemContent(item)">
                  <slot name="content">
                    {{ itemContent(item) }}
                  </slot>
                </span>
              </div>
            </tr>
          </td>
          <!-- Item par -->
          <td
            v-else
            :key="item[itemUniqueKey] || ix"
            class="vue-next-timeline__item odd">
            <!-- Content item -->
            <tr
              class="vue-next-timeline__item__wrapper-content"
              :style="minMaxWidthTr">
                <div class="vue-next-timeline__item--content">
                  <span
                    :title="itemContent(item)"
                    @click="titleClicked(item)"
                    :style="[returnCustomElementColor(item), cursorPointer]"
                    v-if="itemContent(item)">
                    <slot name="content">
                      {{ itemContent(item) }}
                    </slot>
                  </span>
                </div>
            </tr>
            <!-- Title item -->
            <tr
              :key="item[itemUniqueKey] || ix"
              :style="returnCustomElementColor(item)">
                <div
                  class="vue-next-timeline__item--line"
                  :style="returnCustomElementColor(item)">
                  <span class="budget" />
                </div>
                <div class="vue-next-timeline__item--title">
                  <span
                    :title="itemTitle(item)"
                    @click="titleClicked(item)"
                    v-if="itemTitle(item)"
                    :style="[returnCustomElementColor(item), cursorPointer]">
                    <slot name="title">
                      {{ itemTitle(item) }}
                    </slot>
                  </span>
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
      type: [Boolean],
      default: true
    },
    minWidth: {
      type: String,
      default: '700px'
    },
    maxWidth: {
      type: String,
      default: '100%'
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
    }
  },
  data () {
    return {
      itemSelected: {}
    }
  },
  computed: {

    cursorPointer () {
      return {
        cursor: this.itemClickable ? 'pointer' : 'initial'
      }
    },

    minMaxWidthTr () {
      const { minWidthItem, maxWidthItem } = this
      const styleObj = {}

      if (minWidthItem) {
        styleObj['min-width'] = minWidthItem
      }

      if (maxWidthItem) {
        styleObj['max-width'] = maxWidthItem
      }

      return styleObj
    }
  },
  methods: {

    itemTitle (item) {
      return item[this.itemTitleKey]
    },

    itemContent (item) {
      return item[this.itemContentKey]
    },

    returnCustomElementColor (item) {
      return {
        '--color': item.color || '#1e2124',
        'text-align': this.textAlign
      }
    },

    titleClicked (item) {
      if (this.itemClickable) {
        this.$emit('click-item', item)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .vue-next-timeline {
    padding: 30px 0;
    overflow-x: auto;

    > table {
      border-collapse: collapse;

      tr {
        display: block;
        min-height: 80px;
        margin-top: 32px;
        position: relative;
      }

      .vue-next-timeline__item {
        padding: 0;

        &--line {
          background-color: var(--color);
          position: absolute;
          height: 70px;
          width: 1px;
          left: 50%;

          .budget {
            background-color: var(--color);
            position: absolute;
            border-radius: 100%;
            height: 10px;
            width: 10px;

            &:before,
            &:after {
              border-radius: 100%;
              position: absolute;
              display: block;
              content: '';
              padding: 6px;
            }
            &:before {
              border: 1px solid var(--color);
              height: 10px;
              width: 10px;
              left: -7px;
              top: -7px;
            }
            &:after {
              border: 1px solid #848484;
              height: 24px;
              width: 24px;
              left: -14px;
              top: -14px;
            }
          }
        }

        &--title {
          text-transform: uppercase;
          color: var(--color);
          text-align: center;
          line-height: 2rem;
          font-weight: 300;
          font-size: 28px;
          display: flex;
          height: 59px;

          > span {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            display: -webkit-box;
            align-self: center;
            overflow: hidden;
            padding: 0 10px;
            width: 100%;
          }
        }

        &__wrapper-content {
          min-height: 80px;
        }
        &--content {
          text-transform: uppercase;
          line-height: 20px;
          color: #848484;
          font-size: 14px;
          width: 100%;
          left: 0;

          > span {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            max-height: 59px;
          }
        }

        // Impar
        &.even {

          tr:first-child {
            border-bottom: 1px solid #b2b3b6;
          }

          .vue-next-timeline__item--title {
            margin-bottom: 80px;
            margin-top: -59px;
          }
          .vue-next-timeline__item--content > span {
            border-bottom: 2px solid var(--color);
            padding-bottom: 4px;
          }
          .vue-next-timeline__item--line {
            bottom: 0;
            &:before {
              background-color: var(--color);
              border-radius: 100%;
              position: absolute;
              content: '';
              height: 20px;
              width: 20px;
              left: -9px;
              top: -4px;
            }

            .budget {
              bottom: -6px;
              left: -4px;
            }
          }
        }
        // Par
        &.odd {
          tr:nth-child(2) {
            border-top: 1px solid #b2b3b6;
          }

          .vue-next-timeline__item--title {
            margin-top: 86px;
          }
          .vue-next-timeline__item--content > span {
            border-top: 2px solid var(--color);
            padding-top: 4px;
          }
          .vue-next-timeline__item--line {
            top: 0;
            .budget {
              top: -6px;
              left: -4px;
            }

            &:after {
              background-color: var(--color);
              border-radius: 100%;
              position: absolute;
              bottom: -12px;
              height: 20px;
              content: '';
              width: 20px;
              left: -10px;
            }
          }
        }
      }
    }
  }
</style>
