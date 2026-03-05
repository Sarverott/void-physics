from pydantic import BaseModel, BaseConfig
import numpy
from datetime import datetime
import asyncio
import sympy

class Value(BaseModel):
    data: list[any]

class Equation(Value):
    symbols: dict[Value]
    expression: set[Value]
    result: Value

class Passing(Equation):
    inputs: list[Value]
    formulas: set[Equation]
    complexity: list[Value]
    execution: Equation
    outputs: Value

class ReactiveProcedures(Passing):
    revoked: Equation
    fromdata: list[DescriptorData]
    towardpassing: list[ConsensusRulesets]
    evaluate: dict[RelationLink]
    period: Value

class DescriptorData(Value):
    vectorization: list[Value]
    namekey: Value
    linksChain: dict[Value]
    timeptr: Value

class ConsensusRulesets(Equation):
    sidesofstaticality: dict[DescriptorData]
    rulesbetweensides: dict[Equation]
    exceptionsolvers: dict[ReactiveProcedures]

class RelationLink():
    combination: list[DescriptorData]
    resultants: dict[DescriptorData]
    subscopes: dict[DataCarier]

class DataCarier(BaseModel):
    defines: set[Value]
    combines: set[Equation]
    proceeds: set[Passing]