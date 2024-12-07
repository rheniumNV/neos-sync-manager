import {
  DetailBase,
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "Primitive/Quad",
  propsConfig: {
    name: UnitProp.String("Empty"),
    highPriorityIntegration: UnitProp.Boolean(false),
    overrideBoundingBox: UnitProp.Boolean(false),
    overridenBoundingBox: UnitProp.BoundingBox([0, 0, 0, 0, 0, 0]),
    rotation: UnitProp.FloatQ([0, 0, 0, 1]),
    size: UnitProp.Float2([1, 1]),
    dualSided: UnitProp.Boolean(false),
    useVertexColors: UnitProp.Boolean(true),
    upperLeftColor: UnitProp.Color([0, 0, 0, 0, 'sRGB']),
    upperRightColor: UnitProp.Color([0, 0, 0, 0, 'sRGB']),
    LowerLeftColor: UnitProp.Color([0, 0, 0, 0, 'sRGB']),
    LowerRightColor: UnitProp.Color([0, 0, 0, 0, 'sRGB']),
  },
  children: "multi",
} as const satisfies DetailBase;

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
