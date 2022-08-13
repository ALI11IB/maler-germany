export interface PaintType {
  paintType: string | null;
  setPaintType: React.Dispatch<React.SetStateAction<string | null>>;
  handleNext: () => void;
}
