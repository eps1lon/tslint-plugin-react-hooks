import * as ts from "typescript";

/**
 * true if node is a BinaryExpression and the operatorsToken is of kind EqualsToken
 *
 * @param node
 */
export function isAssignmentExpression(
  node: ts.Node
): node is ts.BinaryExpression {
  return (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.EqualsToken
  );
}
