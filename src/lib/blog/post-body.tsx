import GovTechPostContent from "@/components/blog/GovTechPostContent";
import PromptPaymentPostContent from "@/components/blog/PromptPaymentPostContent";
import UpfrontPaymentPostContent from "@/components/blog/UpfrontPaymentPostContent";
import ImplementationMilestonesPostContent from "@/components/blog/ImplementationMilestonesPostContent";
import VentureDebtPostContent from "@/components/blog/VentureDebtPostContent";
import AssignmentOfClaimsPostContent from "@/components/blog/AssignmentOfClaimsPostContent";
import FinancingStrategyPostContent from "@/components/blog/FinancingStrategyPostContent";
import VcWrongChoicePostContent from "@/components/blog/VcWrongChoicePostContent";
import RevolvingLinePostContent from "@/components/blog/RevolvingLinePostContent";
import TermLoanAmortizingPostContent from "@/components/blog/TermLoanAmortizingPostContent";
import RevenueBasedFinancingPostContent from "@/components/blog/RevenueBasedFinancingPostContent";
import CapitalStackSeniorityPostContent from "@/components/blog/CapitalStackSeniorityPostContent";
import CommonStockFinancingPostContent from "@/components/blog/CommonStockFinancingPostContent";
import MetaHyperionPostContent from "@/components/blog/MetaHyperionPostContent";
import NeocloudFinancingPostContent from "@/components/blog/NeocloudFinancingPostContent";
import FiscalYear2027PostContent from "@/components/blog/FiscalYear2027PostContent";
import WorkingCapitalVsGrowthPostContent from "@/components/blog/WorkingCapitalVsGrowthPostContent";
import EarlyPaymentDiscountPostContent from "@/components/blog/EarlyPaymentDiscountPostContent";
import CashFlowGapPostContent from "@/components/blog/CashFlowGapPostContent";
import InvoiceAcceptancePostContent from "@/components/blog/InvoiceAcceptancePostContent";
import InvoicePaymentStatusPostContent from "@/components/blog/InvoicePaymentStatusPostContent";
import LocalGovernmentBoardApprovalPostContent from "@/components/blog/LocalGovernmentBoardApprovalPostContent";
import GrantFundedGovernmentCustomersPostContent from "@/components/blog/GrantFundedGovernmentCustomersPostContent";
import SubcontractorPaymentFromPrimePostContent from "@/components/blog/SubcontractorPaymentFromPrimePostContent";
import PurchaseOrderBalancePostContent from "@/components/blog/PurchaseOrderBalancePostContent";
import GovernmentContractRenewalLapsePostContent from "@/components/blog/GovernmentContractRenewalLapsePostContent";
import GovernmentVendorRegistrationPostContent from "@/components/blog/GovernmentVendorRegistrationPostContent";
import PurchaseCardPostContent from "@/components/blog/PurchaseCardPostContent";
import BigTechEquityRaisesPostContent from "@/components/blog/BigTechEquityRaisesPostContent";
import DataCenterLeaseCommitmentsPostContent from "@/components/blog/DataCenterLeaseCommitmentsPostContent";
import UndisputedInvoicePortionPostContent from "@/components/blog/UndisputedInvoicePortionPostContent";
import IncrementallyFundedGovernmentContractPostContent from "@/components/blog/IncrementallyFundedGovernmentContractPostContent";
import ExtraWorkGovernmentContractModificationPostContent from "@/components/blog/ExtraWorkGovernmentContractModificationPostContent";
import GovernmentContractCloseoutFinalInvoicePaymentPostContent from "@/components/blog/GovernmentContractCloseoutFinalInvoicePaymentPostContent";
import GovernmentPaymentOffsetWarrantHoldPostContent from "@/components/blog/GovernmentPaymentOffsetWarrantHoldPostContent";
import GovernmentStopWorkOrderPaymentPostContent from "@/components/blog/GovernmentStopWorkOrderPaymentPostContent";
import GovernmentContractInterestFinancingCostsPostContent from "@/components/blog/GovernmentContractInterestFinancingCostsPostContent";
import GovernmentCustomerConcentrationCashGapPostContent from "@/components/blog/GovernmentCustomerConcentrationCashGapPostContent";
import GovernmentContractBidProtestCashGapPostContent from "@/components/blog/GovernmentContractBidProtestCashGapPostContent";
import IdiqContractTaskOrderCashGapPostContent from "@/components/blog/IdiqContractTaskOrderCashGapPostContent";
import GovernmentContractFinancialCapabilityPostContent from "@/components/blog/GovernmentContractFinancialCapabilityPostContent";
import GovernmentContractPerformanceBondLetterOfCreditPostContent from "@/components/blog/GovernmentContractPerformanceBondLetterOfCreditPostContent";
import GovernmentTerminationForConveniencePaymentPostContent from "@/components/blog/GovernmentTerminationForConveniencePaymentPostContent";
import SamRegistrationExpiredGovernmentPaymentPostContent from "@/components/blog/SamRegistrationExpiredGovernmentPaymentPostContent";
import {
  ASSIGNMENT_OF_CLAIMS_POST,
  BIG_TECH_EQUITY_POST,
  DATA_CENTER_LEASE_POST,
  GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST,
  GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST,
  GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_POST,
  GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_POST,
  GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_POST,
  IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST,
  GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_POST,
  GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_POST,
  GOVERNMENT_STOP_WORK_ORDER_PAYMENT_POST,
  GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_POST,
  SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_POST,
  EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_POST,
  INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST,
  UNDISPUTED_INVOICE_PORTION_POST,
  CAPITAL_STACK_SENIORITY_POST,
  CASH_FLOW_GAP_POST,
  COMMON_STOCK_FINANCING_POST,
  EARLY_PAYMENT_DISCOUNT_POST,
  FINANCING_STRATEGY_POST,
  FISCAL_YEAR_2027_POST,
  INVOICE_ACCEPTANCE_POST,
  INVOICE_PAYMENT_STATUS_POST,
  GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST,
  SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST,
  GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST,
  GOVERNMENT_VENDOR_REGISTRATION_POST,
  PURCHASE_ORDER_BALANCE_POST,
  LOCAL_GOVERNMENT_BOARD_APPROVAL_POST,
  META_HYPERION_POST,
  NEOCLOUD_POST,
  GOVTECH_POST,
  IMPLEMENTATION_MILESTONES_POST,
  PROMPT_PAYMENT_POST,
  PURCHASE_CARD_POST,
  REVENUE_BASED_FINANCING_POST,
  REVOLVING_LINE_POST,
  TERM_LOAN_AMORTIZING_POST,
  UPFRONT_PAYMENT_POST,
  VC_WRONG_CHOICE_POST,
  VENTURE_DEBT_POST,
  WORKING_CAPITAL_VS_GROWTH_POST,
} from "@/lib/blog/posts";

/** Article body only (no chrome). Shared by the blog page and agent markdown export. */
export function BlogPostBody({ slug }: { slug: string }) {
  if (slug === GOVERNMENT_CONTRACT_INTEREST_FINANCING_COSTS_POST.slug)
    return <GovernmentContractInterestFinancingCostsPostContent />;
  if (slug === GOVERNMENT_CUSTOMER_CONCENTRATION_CASH_GAP_POST.slug)
    return <GovernmentCustomerConcentrationCashGapPostContent />;
  if (slug === GOVERNMENT_CONTRACT_BID_PROTEST_CASH_GAP_POST.slug)
    return <GovernmentContractBidProtestCashGapPostContent />;
  if (slug === IDIQ_CONTRACT_TASK_ORDER_CASH_GAP_POST.slug)
    return <IdiqContractTaskOrderCashGapPostContent />;
  if (slug === GOVERNMENT_CONTRACT_FINANCIAL_CAPABILITY_POST.slug)
    return <GovernmentContractFinancialCapabilityPostContent />;
  if (slug === GOVERNMENT_CONTRACT_PERFORMANCE_BOND_LETTER_OF_CREDIT_POST.slug)
    return <GovernmentContractPerformanceBondLetterOfCreditPostContent />;
  if (slug === GOVERNMENT_TERMINATION_FOR_CONVENIENCE_PAYMENT_POST.slug)
    return <GovernmentTerminationForConveniencePaymentPostContent />;
  if (slug === GOVERNMENT_STOP_WORK_ORDER_PAYMENT_POST.slug)
    return <GovernmentStopWorkOrderPaymentPostContent />;
  if (slug === SAM_REGISTRATION_EXPIRED_GOVERNMENT_PAYMENT_POST.slug)
    return <SamRegistrationExpiredGovernmentPaymentPostContent />;
  if (slug === GOVERNMENT_CONTRACT_CLOSEOUT_FINAL_INVOICE_PAYMENT_POST.slug)
    return <GovernmentContractCloseoutFinalInvoicePaymentPostContent />;
  if (slug === GOVERNMENT_PAYMENT_OFFSET_WARRANT_HOLD_POST.slug)
    return <GovernmentPaymentOffsetWarrantHoldPostContent />;
  if (slug === EXTRA_WORK_GOVERNMENT_CONTRACT_MODIFICATION_POST.slug)
    return <ExtraWorkGovernmentContractModificationPostContent />;
  if (slug === INCREMENTALLY_FUNDED_GOVERNMENT_CONTRACT_POST.slug)
    return <IncrementallyFundedGovernmentContractPostContent />;
  if (slug === UNDISPUTED_INVOICE_PORTION_POST.slug)
    return <UndisputedInvoicePortionPostContent />;
  if (slug === DATA_CENTER_LEASE_POST.slug)
    return <DataCenterLeaseCommitmentsPostContent />;
  if (slug === BIG_TECH_EQUITY_POST.slug)
    return <BigTechEquityRaisesPostContent />;
  if (slug === GOVTECH_POST.slug) return <GovTechPostContent />;
  if (slug === PROMPT_PAYMENT_POST.slug) return <PromptPaymentPostContent />;
  if (slug === UPFRONT_PAYMENT_POST.slug) return <UpfrontPaymentPostContent />;
  if (slug === IMPLEMENTATION_MILESTONES_POST.slug)
    return <ImplementationMilestonesPostContent />;
  if (slug === VENTURE_DEBT_POST.slug) return <VentureDebtPostContent />;
  if (slug === ASSIGNMENT_OF_CLAIMS_POST.slug)
    return <AssignmentOfClaimsPostContent />;
  if (slug === FINANCING_STRATEGY_POST.slug)
    return <FinancingStrategyPostContent />;
  if (slug === VC_WRONG_CHOICE_POST.slug) return <VcWrongChoicePostContent />;
  if (slug === REVENUE_BASED_FINANCING_POST.slug)
    return <RevenueBasedFinancingPostContent />;
  if (slug === CAPITAL_STACK_SENIORITY_POST.slug)
    return <CapitalStackSeniorityPostContent />;
  if (slug === COMMON_STOCK_FINANCING_POST.slug)
    return <CommonStockFinancingPostContent />;
  if (slug === META_HYPERION_POST.slug) return <MetaHyperionPostContent />;
  if (slug === NEOCLOUD_POST.slug) return <NeocloudFinancingPostContent />;
  if (slug === FISCAL_YEAR_2027_POST.slug) return <FiscalYear2027PostContent />;
  if (slug === WORKING_CAPITAL_VS_GROWTH_POST.slug)
    return <WorkingCapitalVsGrowthPostContent />;
  if (slug === EARLY_PAYMENT_DISCOUNT_POST.slug)
    return <EarlyPaymentDiscountPostContent />;
  if (slug === CASH_FLOW_GAP_POST.slug) return <CashFlowGapPostContent />;
  if (slug === INVOICE_ACCEPTANCE_POST.slug)
    return <InvoiceAcceptancePostContent />;
  if (slug === INVOICE_PAYMENT_STATUS_POST.slug)
    return <InvoicePaymentStatusPostContent />;
  if (slug === LOCAL_GOVERNMENT_BOARD_APPROVAL_POST.slug)
    return <LocalGovernmentBoardApprovalPostContent />;
  if (slug === GRANT_FUNDED_GOVERNMENT_CUSTOMERS_POST.slug)
    return <GrantFundedGovernmentCustomersPostContent />;
  if (slug === SUBCONTRACTOR_PAYMENT_FROM_PRIME_POST.slug)
    return <SubcontractorPaymentFromPrimePostContent />;
  if (slug === GOVERNMENT_CONTRACT_RENEWAL_LAPSE_POST.slug)
    return <GovernmentContractRenewalLapsePostContent />;
  if (slug === GOVERNMENT_VENDOR_REGISTRATION_POST.slug)
    return <GovernmentVendorRegistrationPostContent />;
  if (slug === PURCHASE_ORDER_BALANCE_POST.slug)
    return <PurchaseOrderBalancePostContent />;
  if (slug === PURCHASE_CARD_POST.slug) return <PurchaseCardPostContent />;
  if (slug === REVOLVING_LINE_POST.slug) return <RevolvingLinePostContent />;
  if (slug === TERM_LOAN_AMORTIZING_POST.slug)
    return <TermLoanAmortizingPostContent />;
  return null;
}