package io.aiven.klaw.clusterapi.models;

import io.aiven.klaw.clusterapi.models.enums.KafkaSupportedProtocol;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClusterConnectorRequest implements Serializable {

  @NotNull private String env;

  @NotNull private KafkaSupportedProtocol protocol;

  @NotNull private String connectorConfig;

  @NotNull private String connectorName;

  @NotNull private String clusterIdentification;
}
