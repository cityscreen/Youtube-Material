import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Channel extends Vue {
  @Prop({ type: String, default: "" })
  someProp!: string;
}