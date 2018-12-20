import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "import statement forbidden";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return [new Lint.RuleFailure(sourceFile, 0, 1, "test", "rules-of-hooks")];
  }
}
