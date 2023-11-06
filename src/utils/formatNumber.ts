export default function formatNumber(value: number) {
  return new Intl.NumberFormat().format(value);
}
