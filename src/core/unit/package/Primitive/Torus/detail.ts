import {
  DetailBase,
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "Primitive/Torus",
  propsConfig: {
    name: UnitProp.String("Empty"),
    minorSegments: UnitProp.Int(16),
    majorSegments: UnitProp.Int(64),
    minorRadius: UnitProp.Float(0.5),
    majorRadius: UnitProp.Float(0.1),
  },
  children: "multi",
} as const satisfies DetailBase;

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
