export function isEmail(value?: string) {
  if (!value || value.trim() === "") {
    return "border-solid border-2 border-slate-400";
  }

  const isEmailValidation = value.includes("@");

  return isEmailValidation
    ? "border-solid border-2 border-sky-500"
    : "border-solid border-2 border-rose-500";
}
type Rule = {
  label: string;
  regex: RegExp;
};

export function isValidPassword(
  value: string,
  minLength: number,
  requiredCharacters: Rule[]
) {
  if (!value || value.trim() === "") {
    return "border-2 border-slate-400";
  }

  if (value.length < minLength) {
    return "border-2 border-rose-500";
  }

  for (const rule of requiredCharacters) {
    if (!rule.regex.test(value)) {
      return "border-2 border-rose-500";
    }
  }

  return "border-2 border-sky-500";
}